#!/bin/sh

    # --batch to prevent interactive command --yes to assume "yes" for questions
    gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
    --output ./android/app/debug.keystore ./android/app/debug.keystore.gpg

    gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
    --output ./android/app/google-private-key.json ./android/app/google-private-key.json.gpg
