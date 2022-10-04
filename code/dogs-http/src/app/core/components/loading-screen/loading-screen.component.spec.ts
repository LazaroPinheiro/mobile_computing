import { TestBed, inject } from '@angular/core/testing';

import { LoadingScreenComponent } from './loading-screen.component';

describe('a loading-screen component', () => {
	let component: LoadingScreenComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LoadingScreenComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LoadingScreenComponent], (LoadingScreenComponent) => {
		component = LoadingScreenComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});