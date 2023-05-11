import { openDB } from "../../node_modules/idb/build/esm/index.js";
//idb is a library that allows us to use indexedDB

// we are using the openDB method from the idb library to open a database called jate
 const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },// does need go be singel quote?
  
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.error("putDb not implemented");
  //we are using the put method to add the content to the database
  console.log("put to the database");
  // the database name is jate and the version is 1
  const jateDb = await openDB("jate", 1);
  // we are creating a new transaction and specifying the database and data privileges
  const transaction = jateDb.transaction(["jate"], "readwrite");

  // we are opening up the desired object store
  const objstore = transaction.objectStore("jate");

  const request = objstore.put("content", content);

  const result = await request;
  console.log("🚀 - data saved", result);
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error("getDb not implemented");
export const getDb = async () => {
  // console.error("getDb not implemented");
  // we are using the get method to get the content from the database
  const jateDb = await initdb();
  // we are creating a new transaction and specifying the database and data privileges
  const transaction = jateDb.transaction(["jate"], "readwrite");
  // we are opening up the desired object store
  const objstore = transaction.objectStore("jate");
  const request = objstore.getAll();
  const result = await request;
  console.log('result.content', result);
  return result?.content;
  //but what result are we returning?

};

initdb();
