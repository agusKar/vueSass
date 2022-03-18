import { shallowMount } from '@vue/test-utils';
import CardBox from '@/components/CardBox.vue';

describe('cardbox working correctly', () => {
    
    const title = 'cardbox title';
    const msg = 'cardbox msg';
    const wrapper = shallowMount(CardBox,{
        propsData:{
            title,
            msg
        },
    });

    it('DOM done', () => {
        const titleTrigger = wrapper.find('h3');
        const msgTrigger = wrapper.find('p');
        expect(titleTrigger.text()).toMatch(title);
        expect(msgTrigger.text()).toMatch(msg);
    });

    it('redirection done', () => {
        wrapper.find('a').trigger('click');
        expect(window.location.pathname).toEqual('/');
    });
})