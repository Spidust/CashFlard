export default class FormValidate {
  /**
   *
   * @param {string} s
   * @returns {boolean}
   */
  static Empty(s) {
    return s.length == 0;
  }
  /**
   *
   * @param {number} n
   * @param {string} s
   * @returns {boolean}
   */
  static LessThanNchar(n, s) {
    return s.length < n;
  }
  /**
   * @param {string} s
   * @returns {boolean}
   */
  static haveSpecialChar(s) {
    return !s.match(/[A-Za-z_]/);
  }
  
  static MoreThanNchar(n, s) {
    return s.length > n;
  }
}
