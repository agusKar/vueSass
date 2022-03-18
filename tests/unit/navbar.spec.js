import { shallowMount } from '@vue/test-utils';
import NavBar from '../../src/components/NavBar.vue';

describe('NavBar working succesfully', () => {
  it('renders props passed correctly', () => {
    const msgTitle = 'new title';
    const msgSubtitle = 'new subtitle';
    const wrapper = shallowMount(NavBar, {
      propsData: { 
        title: msgTitle, 
        subtitle: msgSubtitle, 
      },
    });
    const titleNavbar = wrapper.find('h2.site-title');
    const subTitleNavbar = wrapper.find('p');
    expect(titleNavbar.text()).toMatch(msgTitle);
    expect(subTitleNavbar.text()).toMatch(msgSubtitle);
  });
});
