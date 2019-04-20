/**
 * 字符串工具类
 *
 * @author zhangly
 * @sine 20.04.2019
 */

export default class StringUtils {
  static truncated(str, size = 25, suffix = '...') {
    return str.length > size ? `${str.substring(0, size)}${suffix}` : str;
  }
}
