import { TestBed, inject } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { book1, book2 } from '../model/book.model.spec';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apikey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

describe('CatalogService', () => {
  let catalog: CatalogService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatalogService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    catalog = TestBed.get(CatalogService);
  });

  it('should be created', (done) => {
    catalog.getBook('b2').subscribe(
      results => {
        expect(results).toEqual(book2);
        done();
      }
    );
    httpTestingController.expectOne(url + apikey).flush([book1, book2]);
  });
});
