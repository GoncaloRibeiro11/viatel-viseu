// ═══════════════════════════════════════════════════════════════
//  VIATEL VISEU — Utilizadores e Permissões
// ═══════════════════════════════════════════════════════════════
//
//  ROLES disponíveis:
//    coord       → acesso total (resultados, equipas, produto)
//    ce_alvaro   → resultados gerais + equipa Álvaro Pedro
//    ce_raquel   → resultados gerais + equipa Raquel Bernardo
//    vendedor    → só resultados gerais
//    gestor      → secção de parceiros (a criar)
//
//  COMO ADICIONAR OU ALTERAR UM UTILIZADOR:
//    1. Abre https://emn178.github.io/online-tools/sha256.html
//    2. Escreve a password no campo e copia o hash resultante
//    3. Cola o hash no campo "hash" abaixo
//    4. Guarda o ficheiro e corre gerar_e_publicar.bat
//
// ═══════════════════════════════════════════════════════════════

const VV_USERS = {

  // ── Coordenador ─────────────────────────────────────────────
  'goncalo': {
    hash: '1d6a59c0e69b5b0ece54e48c2d9eda4ab1c9bf39f8d1ec34e9aaf6fa396f0143', // chegaras200
    role: 'coord',
    name: 'Gonçalo Ribeiro'
  },

  // ── Chefes de Equipa ────────────────────────────────────────
  // 'alvaro': {
  //   hash: 'HASH_DA_PASSWORD_AQUI',
  //   role: 'ce_alvaro',
  //   name: 'Álvaro Pedro'
  // },
  // 'raquel': {
  //   hash: 'HASH_DA_PASSWORD_AQUI',
  //   role: 'ce_raquel',
  //   name: 'Raquel Bernardo'
  // },

  // ── Vendedores ──────────────────────────────────────────────
  // 'rafael': {
  //   hash: 'HASH_DA_PASSWORD_AQUI',
  //   role: 'vendedor',
  //   name: 'Rafael Peixoto'
  // },

  // ── Gestor de Parceiros ─────────────────────────────────────
  // 'parceiros': {
  //   hash: 'HASH_DA_PASSWORD_AQUI',
  //   role: 'gestor',
  //   name: 'Gestor Parceiros'
  // },

};
