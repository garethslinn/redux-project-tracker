import AddUsers from '../components/Users';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import { mount } from 'enzyme';

test('AddUsers Component renders the text inside it', () => {
    const addUser = { firstName:'John', secondName:'Jones', email: 'john@test.com'};
    const wrapper = mount(
        <AddUsers addUser={addUser} />
    );
    const p = wrapper.find('.UsersTable td:first-child');
    expect(p.text()).toBe('John');
});