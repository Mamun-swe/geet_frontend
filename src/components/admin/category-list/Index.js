import React, { useState } from 'react'
import './style.scss'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { ic_remove_red_eye, ic_edit, ic_delete_forever } from 'react-icons-kit/md'

import DeleteModal from '../modal/delete/Index'

const Index = ({ categories }) => {
    const [totalPage] = useState([...Array(10).keys()])
    const [show, setShow] = useState({ value: null, status: false })


    return (
        <div className="category-list">
            <table className="table table-responsive-lg table-borderless">
                <thead>
                    <tr className="border-bottom">
                        <td className="text-center">SL</td>
                        <td>Name</td>
                        <td className="text-center">Profile Image</td>
                        <td className="text-center">Cover Image</td>
                        <td className="text-center">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories.map((category, i) =>
                        <tr className="border-bottom" key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td>{category.name}</td>
                            <td className="text-center">Profile Image</td>
                            <td className="text-center">Cover Image</td>
                            <td className="text-center">
                                <ul>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                        >
                                            <Icon icon={ic_remove_red_eye} size={18} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/admin/category"
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                        >
                                            <Icon icon={ic_edit} size={18} />
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="btn btn-sm rounded-circle shadow-none"
                                            onClick={() => setShow({ value: category.id, status: true })}
                                        >
                                            <Icon icon={ic_delete_forever} size={19} />
                                        </button>
                                    </li>
                                </ul>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>

            {/* Pageination */}
            <div className="pageination-items pl-2">
                <ul>
                    {totalPage.map((i) => {
                        return (<li key={i}><button type="button" className="btn shadow-none">{i + 1}</button></li>)
                    })}
                </ul>
            </div>

            {show.status ?
                <DeleteModal
                    show={show.status}
                    value={show.value}
                    hide={() => setShow({ value: null, status: false })}
                />
                : null}

        </div>
    );
};

export default Index;