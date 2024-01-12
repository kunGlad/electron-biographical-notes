/**
 * @desc 判断是否属于外部链接
 * @param {string} url - 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  /**
   * ([\w.]+: 匹配由字母、数字、下划线和点组成的字符串。这通常表示域名或主机名。
   * \/?: 匹配一个可选的斜杠。这通常用于表示URL是否具有路径。
   * \S*: 匹配0或多个非空白字符。
   * 匹配 http://www.example.com/
   */
  const regRule = /(http|https):\/\/([\w.]+\/?)\S*/;

  return regRule.test(url.toLocaleLowerCase());
}
