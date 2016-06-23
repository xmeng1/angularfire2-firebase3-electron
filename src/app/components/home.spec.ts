import {
    iit,
    it,
    ddescribe,
    describe,
    expect,
    async,
    inject,
    beforeEachProviders
} from '@angular/core/testing';
import {
    TestComponentBuilder,
    ComponentFixture
} from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import {HomeComponent} from './home';

describe('App component', () => {

    @Component({
        template: ``,
        directives: [HomeComponent]
    })
    class HomeTest {}

    it('shoud render with h1 empty', async(inject([TestComponentBuilder], (tcb) => {
        tcb.overrideTemplate(HomeTest, '<ae-home></ae-home>')
            .createAsync(HomeTest).then((fixture: ComponentFixture<HomeTest>) => {
                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelector('h1')).toHaveText('');
            });
    })));
});