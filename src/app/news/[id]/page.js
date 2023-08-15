import React from 'react';

const DynamicNewsPage = ({ params }) => {
    return (
        <div>
            <h1>This is dynamic News Page {params.id}.</h1>
        </div>
    );
};

export default DynamicNewsPage;