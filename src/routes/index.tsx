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
    const updatedCharacteristics = track(() => store)
    console.log("Updated", updatedCharacteristics)
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
