export class Url {
  private readonly value: string;

  constructor(url: string) {
    this.validate(url);
    this.value = url;
  }

  private validate(url: string): void {
    if (!url) {
      throw new Error('URL không được để trống');
    }

    try {
      new URL(url);
    } catch (error) {
      throw new Error((error as Error).message || 'URL không hợp lệ');
    }
  }

  get(): string {
    return this.value;
  }
}
