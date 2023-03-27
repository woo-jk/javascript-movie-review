import "./index.css";

class SkeletonList {
  $target;

  constructor($target) {
    this.$target = $target;

    this.render();
  }

  template() {
    return Array.from(
      { length: 20 },
      () => `
    <li>
      <div class="item-card skeleton">
        <div class="item-thumbnail skeleton"></div>
        <div class="item-title skeleton"></div>
        <div class="item-score skeleton"></div>
      </div>
    </li>`
    ).join("");
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}

export default SkeletonList;
