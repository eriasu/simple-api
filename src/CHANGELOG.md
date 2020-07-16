# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.1.0 (2020-07-16)


### Features

* **api:** add basic api with a basic crud and a midleware for controling errors ([32b099d](https://github.com/eriasu/simple-api/commit/32b099dc6677bc779855a00762bf3805d6353608))
* **api:** implement validations and repository calls on api calls ([ee2a103](https://github.com/eriasu/simple-api/commit/ee2a10367eba60fad2528e8620aec82402c8c239))
* **createone:** return status and data if a user exist or not ([2c6f3c9](https://github.com/eriasu/simple-api/commit/2c6f3c99673d8e7773cc71f7e287b6ecd6eac6fd))
* **database:** add sequelize config and people models ([3f65ce3](https://github.com/eriasu/simple-api/commit/3f65ce3366d3143bfa80f8cfd1500d09bbc4bc60))
* **deleteone:** return status 200 if a user is deleted or a 404 if a user don't exist ([97bcd0c](https://github.com/eriasu/simple-api/commit/97bcd0c3104a94ee980f28ae9b2140dd7c204d07))
* **getone:** return a 200 if a user exist or a 404 if a user don't exist ([0faff59](https://github.com/eriasu/simple-api/commit/0faff596e598b9b0dc4ade246cb3d53e0071350e))
* **package.json:** add multilibraries for a rest api ([a7a31ae](https://github.com/eriasu/simple-api/commit/a7a31ae2d0ab8cc386832cb44db074a44c96bea9))
* **repository:** add repository for the simple-api crud separaiting in controller service and data ([6240179](https://github.com/eriasu/simple-api/commit/62401798732b769a56c5352837de95d4f8f8c02a))
* **updateone:** add update to one people if people don't exist send a 404 status and a message ([967de42](https://github.com/eriasu/simple-api/commit/967de426fc848ff5ea3f2bdbcd36cd636ff6cef8))
* **updateone:** add updateOne to the api and return status if a user is updated or not ([9dd7f54](https://github.com/eriasu/simple-api/commit/9dd7f548c33c660e1bcc9e7999b30fe9246989c4))
* **validations:** add validations for body params and headers ([d6b7c85](https://github.com/eriasu/simple-api/commit/d6b7c85b0e4921f4fe1fa5fc3447fbe6c5ebaea6))


### Bug Fixes

* **cloudbuild:** fix bad image name for gke deploy ([b088df6](https://github.com/eriasu/simple-api/commit/b088df63305dc8b95f87cf29b4ad3997676894bf))
* **deployment:** delete bad label for matchlabels ([23d5daf](https://github.com/eriasu/simple-api/commit/23d5daf9d347434c63670c839d20ad01af219ae1))
* **messsage:** on user not found now it send a json with a message ([e2cc0ca](https://github.com/eriasu/simple-api/commit/e2cc0ca6eb7cc4a3058f932d5e903c4a41587289))
* **model:** update people mode to not allow null on nationalid and remove timestamps ([359e5b4](https://github.com/eriasu/simple-api/commit/359e5b4f8ff1113b8c0e301adfd8b49b40a2643e))
* **validation:** fix bad headers validation ([c2bdfef](https://github.com/eriasu/simple-api/commit/c2bdfefbc819115a94b8690613ffb684a25e4628))
* **validations:** add a validation for a put request where the nationalid is not required ([b252544](https://github.com/eriasu/simple-api/commit/b252544ae9fb828cc25bc9d38ed03c14512efdee))
