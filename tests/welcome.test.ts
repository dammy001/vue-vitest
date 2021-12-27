import { test, assert, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';

test('HelloWorld.vue', async () => {
 expect(HelloWorld).toBeTruthy();

 const wrapper = shallowMount(HelloWorld, {
  props: {
   msg: 'Hello World',
  },
 });

 await expect(wrapper.text()).toContain('Hello World');
 await expect(wrapper.html()).toMatchSnapshot();
});
