import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Button from './CustomButton';
import { UploadIcon } from '../Icons/Icon';
import { extension } from '../../common/Constants';
import Typography from '../Typography/CustomTypography';

const UploadButton = (props) => {
    const {
        onChange,
        text,
        color,
        type,
        imagePreview,
        namePreview,
        maxSize,
        disabled,
    } = props;
    const [error, setError] = useState('');
    const [imagePreviewState, setImagePreviewState] = useState('');
    const [nameFile, setNameFile] = useState('');
    const intl = useIntl();

    useEffect(() => {
        setImagePreviewState(imagePreview);
    }, [imagePreview]);

    useEffect(() => {
        setNameFile(namePreview);
    }, [namePreview]);

    const handleUpload = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        const ext = extension[type].extRegex;
        const sizeLimit = maxSize || extension[type].size;
        if (file && file.name.toLowerCase().match(ext)) {
            if ((file.size / (1024 * 1024)) > sizeLimit) {
                const sizeLimitDisplay = sizeLimit >= 1024 ? `${sizeLimit / 1024}GB` : `${sizeLimit}MB`;
                setError(intl.formatMessage({ id: 'validation.maxSize' }, { maxSize: sizeLimitDisplay }));
                return;
            }
            if (type === 'image') {
                reader.onloadend = () => {
                    onChange(file, reader.result);
                    setImagePreviewState(reader.result);
                    setNameFile('');
                };
                reader.readAsDataURL(file);
                setError('');
                return;
            }
            setNameFile(file.name);
            setImagePreviewState('');
            onChange(file);
            setError('');
            return;
        }
        event.target.value = ''; // clear file
        const formats = extension[type].accept.replace(/\./g, '').replace(/,/g, '、').toUpperCase();
        setError(intl.formatMessage({ id: 'validation.fileFormat' }, { formats }));
    };

    return (
        <>
            <div>
                <Button size="md" color={color} component="label" disabled={disabled}>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        accept={extension[type] && extension[type].accept}
                        onChange={handleUpload}
                    />
                    <UploadIcon />
                    {text}
                </Button>
            </div>
            { imagePreviewState && (
                <div style={{ marginTop: '8px' }}>
                    <img src={imagePreviewState} alt="" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </div>
            )}
            { nameFile && (
                <div style={{ margin: '8px' }}>
                    <Typography color="info">
                        {nameFile}
                    </Typography>
                </div>
            )}
            {
                error && (
                    <Typography color="danger" style={{ marginTop: '8px' }}>
                        {error}
                    </Typography>
                )
            }
        </>
    );
};

UploadButton.defaultProps = {
    text: '',
    onChange: () => {},
    color: 'info',
    type: 'image',
    imagePreview: '',
    namePreview: '',
    maxSize: 0,
    disabled: false,
};

UploadButton.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    imagePreview: PropTypes.string,
    namePreview: PropTypes.node,
    maxSize: PropTypes.number,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf([
        'info',
        'danger',
        'success',
        'primary',
        'warning',
    ]),
    type: PropTypes.oneOf([
        'image',
        'video',
        'audio',
        'document',
    ]),
};

export default UploadButton;
