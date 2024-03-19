import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDropzone } from 'react-dropzone'
import { LoadingButton } from '@mui/lab';

export default function UploadReport({ month, year }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [up, setUp] = React.useState(false);
    const onDrop = React.useCallback(acceptedFiles => {
        setUp(true)
        setTimeout(() => {
            setUp(false)
        }, 2000)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Upload Reports
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {`Upload Reports for ${month}, ${year}`}
                </DialogTitle>
                <DialogContent>
                    <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '10px 20px' }}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drag 'n' drop reports here, or click to select files</p>
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <LoadingButton loading={up} onClick={handleClose} variant='contained' autoFocus>
                        Upload
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}