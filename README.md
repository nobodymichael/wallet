# nobody.wallet / GENESIS v0.1

Eksperymentalny dashboard watch-only. Nie jest portfelem podpisującym transakcje.

## GitHub Pages
1. Wypakuj ZIP i wrzuć **zawartość**, nie dodatkowy folder, do repozytorium `nobodymichael/wallet` na gałęzi `main`. `index.html` ma leżeć w katalogu głównym repo.
2. Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)` → Save.
3. Po wdrożeniu otwórz `https://nobodymichael.github.io/wallet/` (własna domena może zmienić adres).
4. Safari → Udostępnij → Do ekranu początkowego → Otwórz jako aplikację internetową (jeśli opcja jest dostępna) → Dodaj.

Brak npm, kompilacji, CDN i dodatkowych Actions. Wszystkie ścieżki względne.

## Funkcje i ograniczenia
- BTC, ETH, SOL, TRX mainnet: po jednym publicznym adresie każdej sieci. BTC: potwierdzone saldo jednego adresu, nie całego konta HD. Brak tokenów i historii.
- Walidacja BTC Base58Check/Bech32/Bech32m, TRX Base58Check, SOL Base58 32 bajty, ETH tylko format (bez EIP-55). Zawsze zweryfikuj cały adres w oryginalnym portfelu.
- Lokalny zapis publicznych adresów, waluty PLN/USD/EUR, QR, kopiowanie, eksploratory, menu poleceń, ukrywanie salda, interfejs offline po pierwszym udanym wczytaniu.
- Brak seedów, kluczy, podpisywania, wysyłania. Brak audytu bezpieczeństwa. Nie używać do przechowywania sekretów.
- Odświeżenie po potwierdzeniu wysyła publiczne adresy do mempool.space, PublicNode, Solana RPC i TronGrid; ceny z CoinGecko. Dostawcy widzą IP i zapytania. API mogą blokować CORS, wymagać klucza lub ograniczać ruch; brak danych oznaczony. Wycena niepełna jest oznaczona. Nie odświeża się automatycznie.
- Adresy i ustawienia zapisane nieszyfrowane w localStorage, współdzielonym na tej samej domenie GitHub Pages. Ukrywanie salda jest tylko wizualne.
- W razie aktualizacji service workera zwiększ wersję CACHE w sw.js i zamknij wszystkie otwarte karty/aplikacje przed ponownym otwarciem.

## Ikony
`assets/icons/` zawiera trzy warianty SVG i PNG 180/192/512. Domyślny: vault. Aby zmienić na blockchain/ghost, zmień odwołania do vault w index.html, manifest.webmanifest i sw.js, usuń wpis maskable lub wygeneruj odpowiedni plik, zwiększ wersję CACHE. Ikonę iOS może być trzeba dodać ponownie.

## Test lokalny
`python -m http.server 8080`, następnie `http://localhost:8080/`. HTTPS wymagany na GitHub Pages dla service workera, kopiowania i walidacji.

Biblioteka QR: lokalna adaptacja QRCode for JavaScript (Kazuhiko Arase) z qrcode-terminal 0.12.0; licencje w assets/vendor/LICENSE.txt.
