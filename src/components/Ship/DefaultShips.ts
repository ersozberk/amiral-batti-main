interface IDefaultShip {
  size: number;
  name: string;
}

const DEFAULT_SHIPS: IDefaultShip[] = [
  {
    size: 2,
    name: "Yok Edici"
  },
  {
    size: 3,
    name: "Kruvazör"
  },
  {
    size: 3,
    name: "Denizaltı"
  },
  {
    size: 4,
    name: "Savaş Gemisi"
  },
  {
    size: 5,
    name: "Uçak Gemisi"
  }
];

export default DEFAULT_SHIPS;
