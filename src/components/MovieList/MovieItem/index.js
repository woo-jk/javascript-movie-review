import "./index.css";
import StarIcon from "../../../images/star_filled.png";

class MovieItem {
  $target;
  #movieInfo;

  constructor($target, movie) {
    this.$target = $target;
    this.#movieInfo = movie.getMovieData();
  }

  template() {
    const { title, posterSrc, voteAverage } = this.#movieInfo;

    return `
    <li>
      <a href="#">
        <div class="item-card">
          <img
            class="item-thumbnail"
            src=${posterSrc}
            loading="lazy"
            alt=${title}
          />
          <p class="item-title">${title}</p>
          <p class="item-score"><img src=${StarIcon} alt="별점" /> ${voteAverage}</p>
        </div>
      </a>
    </li>
  `;
  }

  render() {
    this.$target.insertAdjacentHTML("beforeend", this.template());
  }
}

export default MovieItem;
