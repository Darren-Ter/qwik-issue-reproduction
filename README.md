# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)

---

## Setup
```shell
git clone https://github.com/Darren-Ter/qwik-issue-reproduction.git
cd qwik-issue-reproduction
pnpm i
pnpm start
// Open browser console
```
## Code
> I want to implement something like undo redo, but I can't find a way to watch a deeply nested object.
> `track()` on `useTask$` and `useBrowserVisibleTask$` looks like only track for 1-level deep only
```tsx
import { component$, useBrowserVisibleTask$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore({
    framework: {
      name: 'Qwik',
      characteristics: [
        'Quick!',
        'Game-changing',
      ]
    }
  }, { deep: true })

  useBrowserVisibleTask$(({ track }) => {
    //* Working
    const updatedCharacteristics = track(store)
    console.group("Track on `store`")
    console.log(updatedCharacteristics)
    console.groupEnd()
  })

  useBrowserVisibleTask$(({ track }) => {
    //* Not Working
    const updatedCharacteristics = track(store.framework.characteristics)
    console.group("Track on `store.framework.characteristics`")
    console.log(updatedCharacteristics)
    console.groupEnd()
  })

  return (
    <>
      <button
        onClick$={() => store.framework.characteristics.push('Awesome!')}
      >
        Click Me 
      </button>
      <pre>
        { JSON.stringify(store.framework, null, 2) }
      </pre>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Issue Reproduction',
};

```
