const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const OpenAI = require('openai');

const client = new OpenAI({ apiKey: '' });

const PDF_PATH = path.join(__dirname, 'Doctors.pdf');

async function assertPdfReadable(fp) {
  console.log('cwd =', process.cwd());
  console.log('resolved PDF path =', fp);

  fs.accessSync(fp, fs.constants.R_OK);
  const stat = fs.statSync(fp);
  if (stat.size === 0) throw new Error('PDF is empty');

  // quick magic-bytes check: %PDF
  const fd = fs.openSync(fp, 'r');
  const buf = Buffer.alloc(4);
  fs.readSync(fd, buf, 0, 4, 0);
  fs.closeSync(fd);
  if (!buf.equals(Buffer.from([0x25, 0x50, 0x44, 0x46]))) {
    console.warn('WARN: File does not start with %PDF — is it really a PDF?');
  }
}

async function run() {
  try {

    const vs = await client.vectorStores.retrieve('');
console.log('retrieved:', vs.id, vs.file_counts);
console.log(JSON.stringify(vs));

    // await assertPdfReadable(PDF_PATH);

    // // 1) Create a vector store
    // const store = await client.vectorStores.create({ name: 'Ulink Doctors KB' });
    // console.log('store.id =', store.id);

    // // 2) Upload & wait for indexing to finish (success/failed)
    // const batch = await client.vectorStores.fileBatches.uploadAndPoll(store.id, {
    //   files: [fs.createReadStream(PDF_PATH)],
    // });
    // console.log('batch.status =', batch.status);

    // // 3) Retrieve store to check counts
    // const after = await client.vectorStores.retrieve(store.id);
    // console.log('file_counts =', after.file_counts); // expect completed > 0

    // // 4) List files inside this store (see per-file status)
    // const files = await client.vectorStores.files.list(store.id);
    // console.log('files:', files.data.map(f => ({
    //   id: f.id, name: f.filename, status: f.status, bytes: f.bytes
    // })));

    // // 5) Finally, list all stores in this Project (pagination-safe)
    // let all = [];
    // let cursor;
    // do {
    //   const page = await client.vectorStores.list({ after: cursor });
    //   all = all.concat(page.data);
    //   cursor = page?.last_id;
    //   if (!page.has_more) break;
    // } while (true);

    // console.log('stores:', all.map(v => ({
    //   id: v.id, name: v.name, files: v.file_counts
    // })));

    // console.log('\nUse this store id in Responses():');
    // console.log(`tool_resources.file_search.vector_store_ids = ["${store.id}"]`);
  } catch (err) {
    // show full API error details
    console.error('\nERROR:', err?.status || '', err?.code || '', err?.message || err);
    if (err?.response?.data) console.error('details:', err.response.data);
  }
}

run();