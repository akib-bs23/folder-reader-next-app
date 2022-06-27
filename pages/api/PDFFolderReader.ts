import fs from 'fs';
import path from 'path';
import IPDFList from '../../src/models/PDFList.model';

const PDFFolderReader = (req: any, res: any) => {
  const dirRelativeToPublicFolder = 'static'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const PDFFiles = filenames.map(pathName => {
    const { name: fileName, ext } = path.parse(pathName);
    if (ext === '.pdf') {
      const modifyName = fileName.split('_').join(' ');
      return {
        path: `${dirRelativeToPublicFolder}/${pathName}`,
        name: modifyName
      } as IPDFList
    }
    return

  })
  // console.log(PDFFiles)

  res.statusCode = 200
  res.json(PDFFiles.filter(Boolean));
}

export default PDFFolderReader