with import <nixpkgs> {};
stdenv.mkDerivation rec {
    name = "fuwatto-env";
    src = ./.;
    buildInputs = with pkgs;[
      nodejs
    ];

    shellHook =''
      trap exit INT;
      npm run dev
    '' ;
}
