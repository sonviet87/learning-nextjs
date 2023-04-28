import React from 'react';
import PropTypes from 'prop-types';
import { NextPageWithLayout } from '@/models';
import { MainLayout } from '@/components/layout';

const About: NextPageWithLayout = () => {
    return (
        <div>
            About
        </div>
    );
};

About.Layout = MainLayout

export default About;
