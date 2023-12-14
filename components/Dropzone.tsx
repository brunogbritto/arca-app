"use client";

import DropzoneComponent from "react-dropzone";

function Dropzone() {
  const maxSize = 20971520;

  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {!isDragActive &&
                "Arraste o seu arquivo aqui ou clique para selecionar"}
              {isDragActive && !isDragReject && "Solte para fazer o upload"}
              {isDragReject && "Este tipo de arquivo não é aceito, desculpe!"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">
                  O arquivo é muito grande.
                </div>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}

export default Dropzone;
