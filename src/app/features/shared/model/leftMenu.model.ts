export class LeftMenu {
  icon!: string;
  label!: string;
  link!: string;

  withIcon(icon: string) {
    this.icon = icon;
    return this;
  }

  withLabel(label: string) {
    this.label = label;
    return this;
  }

  withLink(link: string) {
    this.link = link;
    return this;
  }
}
