const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
    return this.username;
  },

  updatePlayTime(saatler) {
    this.playTime = this.playTime + saatler;
    return this.playTime;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};
