/**
 * plantfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for PlantFYI */
      'plantfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'iucn-badge' | 'hardiness-zone' | 'bloom-calendar' | 'iucn-inline' | 'taxonomy-inline';
      /** Entity slug (e.g. "plants") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'organic';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
