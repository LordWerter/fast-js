import { useTheme } from '@emotion/react';
import React from 'react'
import { CWrap } from './Content.styles';

const Content: React.FC = (props): JSX.Element => {
    const fullTheme = useTheme();
    //@ts-ignore
    const theme = {...fullTheme.Content}
    return (
        <CWrap sizeId={'desktop'} theme={theme.cwrap}>
            <h1>Header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus veritatis, ex incidunt dicta fuga modi nulla exercitationem doloremque nisi reiciendis veniam id! Molestiae, culpa deserunt? Dolore rem voluptates consequuntur.
            Neque corrupti rem quae tempore, non temporibus reiciendis fugit vel minus, dicta porro explicabo ipsum magnam aliquam hic quis voluptatum necessitatibus possimus incidunt architecto sit ullam. Eveniet a enim laudantium.
            Atque rerum eligendi iure ab labore nulla distinctio, harum, at facilis odit aperiam totam. Sint, ducimus exercitationem. Nam fuga cum placeat? Aut ducimus officiis deserunt alias aliquam repellat quidem itaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus veritatis, ex incidunt dicta fuga modi nulla exercitationem doloremque nisi reiciendis veniam id! Molestiae, culpa deserunt? Dolore rem voluptates consequuntur.
            Neque corrupti rem quae tempore, non temporibus reiciendis fugit vel minus, dicta porro explicabo ipsum magnam aliquam hic quis voluptatum necessitatibus possimus incidunt architecto sit ullam. Eveniet a enim laudantium.
            Atque rerum eligendi iure ab labore nulla distinctio, harum, at facilis odit aperiam totam. Sint, ducimus exercitationem. Nam fuga cum placeat? Aut ducimus officiis deserunt alias aliquam repellat quidem itaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus veritatis, ex incidunt dicta fuga modi nulla exercitationem doloremque nisi reiciendis veniam id! Molestiae, culpa deserunt? Dolore rem voluptates consequuntur.
            Neque corrupti rem quae tempore, non temporibus reiciendis fugit vel minus, dicta porro explicabo ipsum magnam aliquam hic quis voluptatum necessitatibus possimus incidunt architecto sit ullam. Eveniet a enim laudantium.
            Atque rerum eligendi iure ab labore nulla distinctio, harum, at facilis odit aperiam totam. Sint, ducimus exercitationem. Nam fuga cum placeat? Aut ducimus officiis deserunt alias aliquam repellat quidem itaque.</p>
        </CWrap>
    )
}

export default Content;
