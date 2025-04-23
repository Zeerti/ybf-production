import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const structureToolOptions = {
  structure: (S) =>
    S.list()
      .title('Web Pages')
      .items([
        S.listItem()
          .title('Home Page')
          .child(
            S.list()
              .title('Home Page Items')
              .items([
                S.documentTypeListItem('homePageNavCard').title('Navigation Cards'),
                S.documentTypeListItem('homePageInfoCard')
                  .title('Info Cards')
                  .child(
                    S.documentList()
                      .title('Info Cards')
                      .filter('_type == "homePageInfoCard"')
                      .defaultOrdering([{field: 'isSeasonalNotification', direction: 'desc'}]),
                  ),
              ]),
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
                  .title('Sandwich Prices')
                  .child(
                    S.editor()
                      .id('sandwichPrices')
                      .schemaType('sandwichPrices')
                      .documentId('sandwichPrices'),
                  )
                  .icon(() => '💰'),
                S.listItem()
                  .title('Sandwich Management')
                  .child(
                    S.list()
                      .title('Sandwich Management')
                      .items([
                        S.documentTypeListItem('sandwich').title('Named Sandwiches'),
                        S.documentTypeListItem('condiment').title('Condiments'),
                        S.documentTypeListItem('sandwichMeat').title('Meat Options'),
                        S.documentTypeListItem('sandwichCheese').title('Cheese Options'),
                      ]),
                  ),
                S.listItem()
                  .title('Daily & Weekly Specials')
                  .child(
                    S.list()
                      .title('Specials')
                      .items([
                        S.listItem()
                          .title('Soup of the Day')
                          .child(
                            S.editor()
                              .id('dailySpecial')
                              .schemaType('dailySpecial')
                              .documentId('dailySpecial'),
                          )
                          .icon(() => '🍜'),
                        S.listItem()
                          .title('Weekly Special')
                          .child(
                            S.editor()
                              .id('weeklySpecial')
                              .schemaType('weeklySpecial')
                              .documentId('weeklySpecial'),
                          )
                          .icon(() => '🌟'),
                      ]),
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
          S.listItem()
          .title('Bundles PDF')
          .child(
            S.editor()
              .id('pdfDocument')
              .schemaType('pdfDocument')
              .documentId('menuPdf') // Fixed document ID for the singleton
          ),
      ]),
}

export default defineConfig({
  name: 'default',
  title: 'ybf_production',

  projectId: 'che1sfre',
  dataset: 'production',

  plugins: [structureTool(structureToolOptions)],

  schema: {
    types: schemaTypes,
  },
})
