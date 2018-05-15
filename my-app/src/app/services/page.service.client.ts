import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages = [
  {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
  {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
  {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
];

// 1. createPage(websiteId, page) - adds the page parameter instance to the local pages array.
// The new page's websiteId is set to the websiteId parameter

  createPage(websiteId, page) {
    page._id = Math.floor(Math.random() * 10000).toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }


// 2. findPageByWebsiteId(websiteId) - retrieves the pages in local pages array whose websiteId
// matches the parameter websiteId

  findPageByWebsiteId(websiteId) {
    let result = [];
      for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
      	result.push(this.pages[i]);
    }
  }
   return result;
}


// 3.findPageById(pageId) - retrieves the page in local pages array whose _id matches
// the pageId parameter

  findPageById(pageId){
      for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
      	return this.pages[i];
    }
  }
}


// 4. updatePage(pageId, page) - updates the page in local pages array whose _id
// matches the pageId parameter

  updatePage(pageId, page) {
    var oldPage = this.findPageById(pageId);
    var index = this.pages.indexOf(oldPage);

    this.pages[index].name = page.name;
    this.pages[index].description = page.description;
  }


// 5. deletePage(pageId) - removes the page from local pages array whose _id
// matches the pageId parameter

  deletePage(pageId){
    var page = this.findPageById(pageId);
    var index = this.pages.indexOf(page);
    this.pages.splice(index, 1);
  }
}

