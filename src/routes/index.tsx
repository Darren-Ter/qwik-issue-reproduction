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
    const updatedCharacteristics = track(store.framework.characteristics)
    console.group("Track on `store.framework.characteristics`")
    console.log(updatedCharacteristics)
    console.groupEnd()
  })

  useBrowserVisibleTask$(({ track }) => {
    //* Not Working
    const updatedCharacteristics = track(store)
    console.group("Track on `store`")
    console.log(updatedCharacteristics)
    console.groupEnd()
  })

  return (
    <>
      <p>
        Open browser console and click this button
      </p>
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
