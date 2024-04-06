import { Client, ID, Storage, Databases, Query } from "appwrite"; // Import appwrite directly
import conf from "../assets/conf";


export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //createPost method
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteCollectionId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service error:: createPost:: error ", error);
    }
  }

  // updatePost method
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteCollectionId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service error:: updatePost:: error ", error);
    }
  }

  //dellePost method
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteCollectionId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service error:: deletePost:: error ", error);
      return false;
    }
  }

  //getPost method
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteCollectionId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service error:: getPost:: error ", error);
    }
  }

  //getPosts method
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteCollectionId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service error:: getPosts:: error ", error);
      return false;
    }
  }

  //uploadFile method
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique,
        file
        );
    } catch (error) {
      console.log("Appwrite service error:: uploadFile:: error ", error);
      return false;
    }
  }

  //deleteFile method
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
      return true;
    } catch (error) {
      console.log("Appwrite service error:: deleteFile:: error ", error);
      return false;
    }
  }

  getFilePrivew(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);

  }
}

const service = new Service();
export default service;
