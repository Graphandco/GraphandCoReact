// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';

// import Axios from 'axios';
// import { useImmerReducer } from 'use-immer';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// const TipEdit = (props) => {
//     function ViewSinglePost() {
//         const originalState = {
//             name: {
//                 value: '',
//                 hasErrors: false,
//                 message: '',
//             },
//             desc: {
//                 value: '',
//                 hasErrors: false,
//                 message: '',
//             },
//             language: {
//                 value: '',
//                 hasErrors: false,
//                 message: '',
//             },
//             content: {
//                 value: '',
//                 hasErrors: false,
//                 message: '',
//             },
//             isFetching: true,
//             isSaving: false,
//             id: useParams().id,
//             sendCount: 0,
//         };

//         function ourReducer(draft, action) {
//             switch (action.type) {
//                 case 'fetchcomplete':
//                     draft.title.value = action.value.title;
//                     draft.title.desc = action.value.desc;
//                     draft.title.language = action.value.language;
//                     draft.title.content = action.value.content;
//                     draft.isFetching = false;
//                     return;
//             }
//         }
//     }
//     const [state, dispatch] = useImmerReducer(ourReducer, originalState);

//     useEffect(() => {
//         const recupereTip = async () => {
//             try {
//                 const response = await Axios.get(
//                     `http://localhost:8080/coding-tips/${state.id}`
//                 );
//                 dispatch({ type: 'fetchComplete', value: response.data });
//             } catch (e) {
//                 console.log('Une erreur est survenue');
//             }
//         };
//         recupereTip();
//     }, []);

//     if (state.isFetching) return <p>Chargement...</p>;

//     return (
//         <form>
//             <div className='tips-form__item name'>
//                 <TextField
//                     //label='Nom'
//                     value={state.title.value}
//                     autoFocus
//                     type='text'
//                     fullWidth={true}
//                 />
//             </div>

//             <div className='tips-form__item desc'>
//                 <TextField
//                     //label='Description'
//                     value={state.desc.value}
//                     type='text'
//                     autoComplete='off'
//                     fullWidth={true}
//                 />
//             </div>

//             <div className='tips-form__item language'>
//                 <TextField
//                     //label='Langage'
//                     value={state.language.value}
//                     type='text'
//                     autoComplete='off'
//                     fullWidth={true}
//                 />
//             </div>

//             <div className='tips-form__item content'>
//                 <TextField
//                     //label='Code du Tip'
//                     value={state.content.value}
//                     multiline
//                     variant='outlined'
//                     fullWidth={true}
//                     rows='5'
//                     name='body'
//                     type='text'
//                 />
//             </div>

//             <div className='tips-form__item button'>
//                 <Button type='submit' variant='outlined'>
//                     Enregistrer les changements
//                 </Button>
//             </div>
//         </form>
//     );
// };

// export default TipEdit;
