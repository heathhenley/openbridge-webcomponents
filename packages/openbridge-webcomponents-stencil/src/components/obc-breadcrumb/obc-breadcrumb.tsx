import { Component, Prop, h } from '@stencil/core';

export interface BreadcrumbItem {
  label: string;
}

@Component({ tag: 'obc-breadcrumb', shadow: true, styleUrl: 'obc-breadcrumb.css' })
export class Breadcrumb {
  @Prop() items = [] as BreadcrumbItem[];

  render() {
    return (
    <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol>
    {this.items.map((item, i) => (
      <li>
          {i > 0 ? <span class="icon"><obc-icon iconId="02-chevron-right" class="divider"></obc-icon></span> : ''}
          <span class="label">{item.label}</span>
      </li>
      ))}
    </ol>
  </nav>
    )
  }
}


