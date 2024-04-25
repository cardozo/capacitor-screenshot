# capacitor-screenshot-manager

Plugin to manage screenshot on Ios and Android

## Install

```bash
npm install capacitor-screenshot-manager
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`ping(...)`](#ping)
* [`addScreenshotListener(...)`](#addscreenshotlistener)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### ping(...)

```typescript
ping(options: { message: string; }) => Promise<{ response: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

**Returns:** <code>Promise&lt;{ response: string; }&gt;</code>

--------------------


### addScreenshotListener(...)

```typescript
addScreenshotListener(callback: (info: any) => void) => Promise<void>
```

| Param          | Type                                |
| -------------- | ----------------------------------- |
| **`callback`** | <code>(info: any) =&gt; void</code> |

--------------------

</docgen-api>
