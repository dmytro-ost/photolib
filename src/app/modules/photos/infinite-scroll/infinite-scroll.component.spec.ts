import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollComponent } from './infinite-scroll.component';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;

  const setupIntersectionObserverMock = ({
    root = null,
    rootMargin = '',
    thresholds = [],
    disconnect = () => null,
    observe = () => null,
    takeRecords = () => [],
    unobserve = () => null
  } = {}): void => {
    class MockIntersectionObserver implements IntersectionObserver {
      readonly root: Element | null = root;
      readonly rootMargin: string = rootMargin;
      readonly thresholds: ReadonlyArray<number> = thresholds;
      disconnect: () => void = disconnect;
      observe: (target: Element) => void = observe;
      takeRecords: () => IntersectionObserverEntry[] = takeRecords;
      unobserve: (target: Element) => void = unobserve;
    }

    Object.defineProperty(
      window,
      'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver
    });

  };

  beforeEach(async () => {
    setupIntersectionObserverMock();
    await TestBed.configureTestingModule({
      declarations: [InfiniteScrollComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
