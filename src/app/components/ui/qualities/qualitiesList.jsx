import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
// добавила кастомный хук для качеств
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    // добавила загрузку перед появлением качеств на странице
    const { isLoading } = useQualities();
    if (isLoading) return "Loading...";
    return (
        <>
            {qualities.map((qual) => (
                // в консоли qualities передаются просто как id,
                // поэтому необходимо передать id ниже
                <Quality key={qual} id={qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
