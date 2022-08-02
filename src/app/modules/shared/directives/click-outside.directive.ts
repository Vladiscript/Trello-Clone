import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
    selector: '[appClickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {

    @Output() clickOutside = new EventEmitter<void>();

    subscription: Subscription | undefined;

    constructor(
        private element: ElementRef,
        @Inject(DOCUMENT) private document: Document,
    ) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.subscription = fromEvent(this.document, 'click').pipe(
            filter(event => !this.isInside(event.target as HTMLElement)),
        ).subscribe(() => {
            this.clickOutside.emit();
        }))
    }

    isInside(element: HTMLElement) {
        return element === this.element.nativeElement || this.element.nativeElement.contains(element);
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
