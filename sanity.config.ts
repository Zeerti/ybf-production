import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const structureToolOptions = {
  structure: (S) =>
    S.list()
      .title('Web Pages')
      .items([
        S.listItem()
          .title('Landing Page')
          .child(
            S.list()
              .title('Landing Items')
              .items([S.documentTypeListItem('landingPageCard').title('Landing Page Cards')]),
          ),
        S.listItem()
          .title('Deli Foods Page')
          .child(
            S.list()
              .title('Deli Food Items')
              .items([
                S.documentTypeListItem('coldCuts').title('Cold Cuts'),
                S.documentTypeListItem('cheese').title('Cheeses'),
                S.documentTypeListItem('deliSalad').title('Deli Salads'),
              ]),
          ),
        S.listItem()
          .title('Lunch Specials Page')
          .child(
            S.list()
              .title('Lunch Special Options')
              .items([
                S.listItem()
                  .title('Condiments')
                  .child(S.documentTypeList('condiment').title('Condiments')),
                S.listItem()
                  .title('Sandwiches')
                  .child(S.documentTypeList('sandwich').title('Sandwiches')),
                S.listItem()
                  .title('Meat Choices')
                  .child(S.documentTypeList('sandwichMeat').title('Meat Options')),
                S.listItem()
                  .title('Cheese Choices')
                  .child(S.documentTypeList('sandwichCheese').title('Cheese Options')),
                S.listItem()
                  .title('Daily and Weekly Lunch Specials')
                  .child(
                    S.documentTypeList('lunchSpecialBanner').title(
                      'Lunch Daily and Weekly Specials',
                    ),
                  ),
                S.listItem()
                  .title('Bottom Floating Banner')
                  .child(
                    S.documentTypeList('lunchSpecialBottomBanner').title('Floating Bottom Banner'),
                  ),
              ]),
          ),
        S.listItem()
          .title('Bundles Page')
          .child(
            S.list()
              .title('Bundles Page')
              .items([
                S.documentTypeListItem('franksOriginalBundle').title('Franks Original Bundles'),
                S.documentTypeListItem('bundle').title('Other Bundles'),
              ]),
          ),
        S.listItem()
          .title('Specialty/Game Meats Page')
          .child(
            S.list()
              .title('Specialty and Game Meats')
              .items([
                S.listItem()
                  .title('Specialty Meats')
                  .child(S.documentTypeList('specialtyMeat').title('Specialty Meats')),
                S.listItem()
                  .title('Game Meats')
                  .child(S.documentTypeList('gameMeat').title('Game Meats')),
              ]),
          ),
      ]),
}

export default defineConfig({
  name: 'default',
  title: 'ybf_production',

  projectId: 'che1sfre',
  dataset: 'development',

  plugins: [structureTool(structureToolOptions), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
