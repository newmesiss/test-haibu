
export class HaibuUtils {
  //Mis Funciones Utiles
  /**
   * Retorna un Bolean comprobando si el rut es valido
   *
   * @param rut
   * @returns {boolean}
   */
  public static validaRut(rut:any) {
    if (rut == null) {
      return false;
    } else {
      rut = HaibuUtils.limpiarRut(rut);
      rut = rut.trim();
      var position = (rut.length) - 1;
      var ouputRut = [rut.slice(0, position), '-', rut.slice(position)].join('');
      var Fn = {
        // Valida el rut con su cadena completa "XXXXXXXX-X"
        validaRut: function (rutCompleto:any) {
          rutCompleto = rutCompleto.replace("‐", "-");
          if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
          var tmp = rutCompleto.split('-');
          var digv = tmp[1];
          var rut = tmp[0];
          if (digv == 'K') digv = 'k';
          return (Fn.dv(rut) == digv);
        },
        dv: function (T:any) {
          var M = 0, S = 1;
          for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
          return S ? S - 1 : 'k';
        }
      }
      const validation = Fn.validaRut(ouputRut);
      return validation;
    }
  }
  /**
 * Formatea rut ej: 72888882 to 7.288.888-2
 *
 * @param rut
 * @returns {string}
 */
  public static formateaRut(rut:any) {
    if (rut == null) {
      return '';
    } else {
      var rutPuntos = "";
      var actual = rut.replace(/^0+/, "");
      if (actual != '' && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
          var letra = inicio.charAt(i);
          rutPuntos = letra + rutPuntos;
          if (j % 3 == 0 && j <= inicio.length - 1) {
            rutPuntos = "." + rutPuntos;
          }
          j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
      }
      return rutPuntos || null;
    }
  }
  public static limpiarRut(rut:any): string {
    if (rut == null) {
      return rut;
    } else {
      rut = rut.replace(/\./g, '')
      rut = rut.replace(/\-/g, '')
      rut = rut.trim();
      rut = rut.toLowerCase();
      return rut;
    }
  }

}
