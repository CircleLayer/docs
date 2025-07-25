import React from 'react';

export default function FooterCopyright({ copyright }) {
    return (
        <div
            className="footer__copyright footer__copyright__custom"
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: copyright }}
        />
    );
}
