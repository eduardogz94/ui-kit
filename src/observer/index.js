// isIntersecting :: IntersectionObserverEntry -> Boolean
export const isIntersecting = ({ isIntersecting }) => isIntersecting;

/**
 * Sets the `intersecting` property when the element is on screen.
 * The primary interface for the Intersection Observer API.
 * Provides methods for creating and managing an observer which can watch any number of target elements for the same intersection configuration.
 * Each observer can asynchronously observe changes in the intersection between one or more target elements and a shared ancestor element or with their top-level Document's viewport.
 * The ancestor or viewport is referred to as the root.
 * @param  {IntersectionObserverEntry} entries
 * @protected
 */
export function observerCallback(entries) {
  // The observer simply sets a property
  if (entries.some(isIntersecting)) this.intersecting = true;
}

/**
 * Initializes the IntersectionObserver when the element instantiates.
 * @protected
 */
export function initIntersectionObserver() {
  if (this.observer) return;
  // Start loading the component before it appears on screen.
  this.observer = new IntersectionObserver(this.observerCallback, {});
  this.observer.observe(this);
}

/**
 * Disconnects and unloads the IntersectionObserver.
 * @protected
 */
export function disconnectObserver() {
  this.observer.disconnect();
  this.observer = null;
  delete this.observer;
}
