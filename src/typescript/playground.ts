enum PictureOrientation {
  Landscape,
  Vertical,
  Horizontal,
}

class Item {
  protected _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  toString(): string {
    return `{id: ${this.id}, title: ${this.title}}`;
  }
}

class Picture extends Item {
  private _orientation: PictureOrientation;

  constructor(id: number, title: string, orientation: PictureOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  get orientation(): PictureOrientation {
    return this._orientation;
  }

  set orientation(orientation: PictureOrientation) {
    this._orientation = orientation;
  }

  getTitleWithCustomEnd() {
    return super.toString() + " End";
  }
}

const image = new Picture(1, "Vacations", PictureOrientation.Landscape);

image.title = "Working";
// image.id = 2 // Error because the setter is not defined
console.log(image.title);
console.log(image.id);
console.log(image.getTitleWithCustomEnd());
