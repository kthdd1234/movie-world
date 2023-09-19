import { NextResponse } from 'next/server';
import Slider from 'react-slick';

export type TDivElement = HTMLDivElement | null;

export type TSlider = Slider | null;

export type TLanguage = 'ko' | 'en';

export type TNextResponce = NextResponse<{ data: Response }> | null;
