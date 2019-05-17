import React from 'react';
import renderer,{ ReactTestRenderer, ReactTestRendererTree } from 'react-test-renderer';
import { LoginScreen, ILoginScreen } from '../screens/Login/LoginScreen';
import { Card } from 'primereact/card';

test('Renders Login Screen Correctly',() => {
    
    const component:ReactTestRenderer = renderer.create(
        <LoginScreen />
    )
    
    let content = component.root.findByProps({ className: "content-section implementation" });
    let cardChildren = content.findAllByType(Card);
    let passwordField = cardChildren[0].findByProps({ label: "Password" })

    
    console.info('PASSWORD FIELD',passwordField);
    passwordField.props.onChange({ currentTarget: { value: 'droidmakk' } })
    
    expect(passwordField.props.value).toBe('droidmakk');
    
})