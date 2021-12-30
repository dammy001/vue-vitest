import { mount } from '@vue/test-utils';
import HelloWorld from '../src/components/HelloWorld.vue';

test('HelloWorld.vue', async () => {
 expect(HelloWorld).toBeTruthy();

 const wrapper = mount(HelloWorld, {
  props: {
   msg: 'Hello World',
  },
 });

 expect(wrapper.text()).toContain('Hello World');
 expect(wrapper.text()).toContain(0);
 expect(wrapper.html()).toMatchSnapshot();

 await wrapper.get('button').trigger('click');
 expect(wrapper.text()).toContain(1);
});
